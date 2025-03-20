const ID = () => {
    const caracteres = `abcdefghijklmnopqrstuvwxyz${'abcdefghijklmnopqrstuvwxyz'.toUpperCase()}1234567890`;
    const length = caracteres.length;
    const generate = () => Math.round(Math.random() * length);
    let id = '';
    for(let i = 0; i < length; i++) {
         id += caracteres[generate()];
    }
    return id;
};

export default ID;