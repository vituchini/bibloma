export default class Range {
    constructor(data) {
        this.state = {
            range: data.range,
            points: data.points,
            values: data.values,
            length: data.values.right - data.values.left,
            widthLine: data.range.offsetWidth,
            progressLine: data.progress,
            currentPoint: null,
            flagMove: false,
            position: {},
            prevMove: null,
            support: data.values.support,
        };
        this.startAction = this.startAction.bind(this);
        this.moveAction = this.moveAction.bind(this);
        this.endAction = this.endAction.bind(this);
        this.movePoint = this.movePoint.bind(this);
        this.getValues = this.getValues.bind(this);
        this.getCoord = this.getCoord.bind(this);
        this.init = this.init.bind(this);

        this.init();
    }

    movePoint(point, value, start, flag) {
        const id = point.getAttribute('data-id');
        const move = value !== undefined ? value : this.state.position[id].move;

        point.style.transform = `translate(${move}px,0)`;
        if (start === undefined) {
            if (flag === undefined) {
                if (id === 'right') {
                    let width = this.state.position.right.move - this.state.position.left.end;
                    width = width < 0 ? 0 : width;
                    // if (flagDouble === true) {
                    //     this.state.position.left.end = 0;
                    // }
                    this.state.progressLine.style.width = `${width}px`;
                    this.state.progressLine.style.transform = `translate(${this.state.position.left.end}px,0)`;
                }
                if (id === 'left') {
                    let width = this.state.position.right.end - this.state.position.left.move;
                    width = width < 0 ? 0 : width;
                    // if (flagDouble === true) {
                    //     this.state.position.right.end = this.state.widthLine;
                    // }
                    this.state.progressLine.style.width = `${width < 0 ? 0 : width}px`;
                    this.state.progressLine.style.transform = `translate(${this.state.position.left.move}px,0)`;
                }
            }
        } else {
            const left =
                (this.state.values.current.left /
                    (this.state.values.left === 0 ? 100 : this.state.values.left)) *
                this.state.widthLine;
            const right =
                this.state.widthLine -
                (this.state.values.current.right /
                    (this.state.values.right === 0 ? 100 : this.state.values.right)) *
                this.state.widthLine;
            this.state.progressLine.style.width = `${this.state.widthLine - left - right}px`;
            this.state.progressLine.style.transform = `translate(${left}px,0)`;
        }

        this.getValues(point, move);
    }

    getValues(point, move) {
        const currentValue = (move / this.state.widthLine) * this.state.length;

        if (this.state.values.selector) {
            point.querySelector(this.state.values.selector).innerHTML = `${parseInt(currentValue, 10)}${
        this.state.support
      }`;
        }

        const id = point.getAttribute('data-id');

        if (this.state.range.querySelector(`input[name="${id}"]`)) {
            this.state.range.querySelector(`input[name="${id}"]`).value = parseInt(currentValue, 10);
        }
    }

    getCoord(e) {
        return e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
    }

    startAction(e) {
        const point = e.target;
        const id = point.getAttribute('data-id');

        this.state.currentPoint = id;
        this.state.flagMove = true;
        this.state.position[id].start = this.getCoord(e);

        document.querySelector('#root').style.userSelect = 'none';
        document.querySelector('#root').style.webkitUserSelect = 'none';
    }

    moveAction(e) {
        if (this.state.flagMove === true) {
            let dir;
            const id = this.state.currentPoint;
            const point = this.state.points[id];

            if (this.getCoord(e) - this.state.prevMove > 0) {
                dir = 'right';
            } else {
                dir = 'left';
            }
            e.preventDefault();
            this.state.prevMove = this.getCoord(e);

            if (this.getCoord(e) - this.state.position[id].start + this.state.position[id].end < 0) {
                this.state.position[id].move = 0;
                this.movePoint(point, 0);
                if (this.state.position.left.end > 0) {
                    this.state.position.left.move = 0;
                    // this.state.position.left.end = 0;
                    this.movePoint(this.state.points.left, 0, undefined, true, true);
                }
                return false;
            }
            if (
                this.getCoord(e) - this.state.position[id].start + this.state.position[id].end >
                this.state.widthLine
            ) {
                this.state.position[id].move = this.state.widthLine;
                this.movePoint(point, this.state.widthLine);
                if (this.state.position.right.end < this.state.widthLine) {
                    this.state.position.right.move = this.state.widthLine;
                    // this.state.position.right.end = this.state.widthLine;
                    this.movePoint(this.state.points.right, this.state.widthLine, undefined, true, true);
                }
                return false;
            }
            this.state.position[id].move =
                this.getCoord(e) - this.state.position[id].start + this.state.position[id].end;
            this.movePoint(point);

            if (
                id === 'right' &&
                this.state.position[id].move < this.state.position.left.end &&
                dir === 'left'
            ) {
                this.state.position.left.end = this.state.position[id].move;
                this.movePoint(this.state.points.left, this.state.position[id].move, undefined, true);
            }

            if (
                id === 'left' &&
                this.state.position[id].move > this.state.position.right.end &&
                dir === 'right'
            ) {
                this.state.position.right.end = this.state.position[id].move;
                this.movePoint(this.state.points.right, this.state.position[id].move, undefined, true);
            }
        }
        return true;
    }

    endAction() {
        if (this.state.flagMove === true) {
            this.state.flagMove = false;
            const id = this.state.currentPoint;

            this.state.currentPoint = null;
            this.state.position[id].end = this.state.position[id].move;
        }
    }

    init() {
        Object.entries(this.state.points).forEach(([key, point]) => {
            point.setAttribute('data-id', key);
            point.addEventListener('mousedown', this.startAction);
            point.addEventListener('touchstart', this.startAction);

            const delta =
                (this.state.values.current[key] /
                    (this.state.values[key] === 0 ? 100 : this.state.values[key])) *
                this.state.widthLine;
            this.state.position[key] = {
                start: 0,
                move: 0,
                end: delta,
                value: this.state.values.current[key],
            };
            this.movePoint(point, delta, true);
            if (this.state.values.selector) {
                point.querySelector(
                    this.state.values.selector,
                ).innerHTML = `${this.state.values.current[key]}${this.state.support}`;
            }

            const input = document.createElement('input');

            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', this.state.values.current[key]);
            this.state.range.appendChild(input);
        });
        document.addEventListener('mousemove', this.moveAction);
        document.addEventListener('touchmove', this.moveAction, { passive: false });
        document.addEventListener('mouseup', this.endAction);
        document.addEventListener('touchend', this.endAction);
    }
}