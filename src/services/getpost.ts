import { Shapepost} from "../types/Shapepost";
import { post} from "../mocks/postcard";

class Shapeposts {
  async get(): Promise<Shapepost[]> {
    console.log("starting fetch...");
    const value: Shapepost[] = await new Promise((resolve) => {
      setTimeout(() => resolve(post), 3000);
    });
    return value;
  }
}

export default new Shapeposts();