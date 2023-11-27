import {Dispatch, SetStateAction} from 'react';
import {Brand} from '../../../redux/api/type.api';
import {SelectTypeBrand} from '../../main/type.main';

export interface ISettingsModal {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  brands: Brand[] | undefined;
  selectBrand: SelectTypeBrand | {};
  setSelectBrand: Dispatch<SetStateAction<{} | SelectTypeBrand>>;
  sectionNum: number;
  setSectionNum: Dispatch<SetStateAction<number>>;
}
