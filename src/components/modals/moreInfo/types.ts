import {SelectTypeBrand} from '../../main/type.main';

export type MoreInfoType = {
  modalVisible: boolean;
  setModalVisible: (
    prevState: boolean | SelectTypeBrand,
  ) => boolean | SelectTypeBrand;
  selectedId: number | null;
};
