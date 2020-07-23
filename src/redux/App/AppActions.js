import { actionsCreator, payload } from "../../decorators/ActionDecorators";

@actionsCreator()
export class AppActions {
  @payload()
  static APP_INITIALIZE;
}
