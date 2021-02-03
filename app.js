Vue.createApp({
    data() {
        return {
            valueInput: '',
            needDoList: [],
            comleteDoList: []
        }
    },
    methods: {
        handlyInput (event) {
            this.valueInput = event.target.value;
        },
        addTask() {
            if(this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput,
                id: ((+new Date).toString(32) + Math.random().toString(32).substring(2, 9))
            });
            this.valueInput = '';
        },
        doCheck(index, type) {
            if(type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.comleteDoList.push(...completeMask);
            } else {
                const noCompleteMask = this.comleteDoList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.comleteDoList;
            toDoList.splice(index, 1);
        }
    }
}).mount('#app');