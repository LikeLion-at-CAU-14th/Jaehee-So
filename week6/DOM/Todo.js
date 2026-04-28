import Button from "./Button.js";
import Div from "./Div.js";

class Todo{
    constructor(todo){
        this.row=new Div('','row').node; 
        this.textBox=new Div(todo,'text-box');
        this.completeBtn = new Button('', 'complete-btn');
        this.delBtn = new Button('', 'del-btn');

        // 2. 체크 아이콘 Image 객체 생성
        const checkIcon = new Image();
        checkIcon.src = './check.png'; 
        checkIcon.style.width = '18px';      
        
        // 3. 휴지통 아이콘 Image 객체 생성
        const trashIcon = new Image();
        trashIcon.src = './recycle-bin.png'; 
        trashIcon.style.width = '18px';

        // 4. 버튼 노드에 이미지 추가
        this.completeBtn.node.appendChild(checkIcon);
        this.delBtn.node.appendChild(trashIcon);
    }
    addRow(){
        [this.textBox,this.completeBtn,this.delBtn].forEach(dom => {
            this.row.appendChild(dom.node);
        })
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}
export default Todo;