export interface Story{
  id?: number;
  title:string;
  description:string;
  views: number;
  downloads: number;
  imagepath: string;
  imageBase64Path?: string;
  createdDate: any;
  updatedDate: any;
}
