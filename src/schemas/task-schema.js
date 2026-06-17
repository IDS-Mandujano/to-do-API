const { z } = require('zod');

const createTaskSchema = z.object({
    title: z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return "El titulo es obligatorio";
            }
            return "El titulo debe ser un texto";
        }
    }).min(1, "El titulo no puede estar vacio"),

    description: z.string({
        error: "La descripcion debe ser un texto"
    }).optional()
});