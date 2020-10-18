import { IO, asyncMiddleware} from "@reactor4/forklift";

export class someFeatureController {
  postName() {
    return asyncMiddleware(async (req, res) => {
        IO.set(res, req.body)
      })
  }
}