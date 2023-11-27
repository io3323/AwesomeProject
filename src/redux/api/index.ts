import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  GetBrandsResponse,
  GetCarsQuery,
  GetCarsResponse,
  MoreInfoModel,
} from './type.api';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
  endpoints: builder => ({
    getCars: builder.query<GetCarsResponse, GetCarsQuery>({
      query: params => {
        const url = params.brandId
          ? `chineseCars/${params.brandId}`
          : 'chineseCars';
        return url;
      },
    }),
    getBrands: builder.query<GetBrandsResponse, null>({
      query: () => 'brands',
    }),
    getMoreInfoModel: builder.query<MoreInfoModel, number>({
      query: id => `moreInfoModels/${id}`,
    }),
  }),
});

export const {useGetCarsQuery, useGetBrandsQuery, useGetMoreInfoModelQuery} =
  api;

export default api;
