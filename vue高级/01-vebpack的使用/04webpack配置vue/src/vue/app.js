export default {
    template: `
        <div>Hello,<p>{{name}}<p/>
            <button @click="btnClick">点击</button>
        </div>
    `,
    data(){
        return{
            name: "张飞"
        }
    },
    methods:{
        btnClick(){
            this.name = "关羽";
        }
    }
}