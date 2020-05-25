export interface MenuLevel3List {
  menuName: string;
  url: string;
  iconName: string;
  parentID: number;
  menuLevel: number;
  isActive: boolean;
  id: number;
  isChecked: boolean;
  orderBy: number;
}

export interface MenuLevel2List {
  menuName: string;
  url: string;
  iconName: string;
  parentID: number;
  menuLevel: number;
  isActive: boolean;
  menuLevel3List: MenuLevel3List[];
  id: number;
  childIds: string;
  isChecked: boolean;
  orderBy: number;
}

export interface User {
  id: number;
  menuName: string;
  url: string;
  iconName: string;
  parentID: number;
  menuLevel: number;
  isActive: boolean;
  createdBy?: any;
  createdDate: Date;
  modifiedBy?: any;
  modifiedDate: Date;
  oCFRMenuModelList?: any;
  menuLevel2List: MenuLevel2List[];
}
