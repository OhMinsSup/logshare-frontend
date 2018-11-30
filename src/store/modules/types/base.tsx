import { baseCreators } from '../base';

export type SetWidthAction = ReturnType<typeof baseCreators.setWidth>;
export type SetCommonMenuAction = ReturnType<typeof baseCreators.setCommonMenu>;
export type SetProfileUpdateModalAction = ReturnType<
  typeof baseCreators.setProfileUpdateModal
>;
