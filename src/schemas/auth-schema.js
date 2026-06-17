const { z } = require('zod');

const authSchema = z.object({
    username: z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return "El usuario es obligatorio";
            }
            return "El usuario debe ser un texto";
        }
    }).min(1, "El usuario no puede estar vacio"),

    password: z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return "El password es obligatorio";
            }
            return "El password debe ser un texto";
        }
    }).min(1, "El password no puede estar vacio"),

});

module.exports = {
    authSchema
};