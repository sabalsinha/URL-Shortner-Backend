import { nanoid } from "nanoid";

const generateId = async () => {
    const id = nanoid(6);
    console.log("shortId: ", id);
    return id;
};


export default generateId;