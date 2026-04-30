import Div from "./Div.js";
import Button from "./Button.js";

class Complete {
    constructor(todo) {
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box'); 
        this.textBox.node.classList.add('done-text');
        this.delBtn = new Button('삭제', 'del-btn');
    }

    addRow() {
        [this.textBox, this.delBtn].forEach(dom => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    getRow() { 
        return this.row; 
    }

    getDelBtn() { 
        return this.delBtn.node; 
    }
}

export default Complete;