class Task {

    constructor (

        title,
        description,)
        {

            if(typeof title != 'string' || title.trim() === ''){
                throw new Error("El titulo es obligatorio y debe ser texto")
            }
            
            this.id = Date.now().toString();
            this.title = title;
            this.description = description || '',
            this.completed = false

        }

}   

module.exports = Task