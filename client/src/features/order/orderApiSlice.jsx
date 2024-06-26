import apiSlice from "../../app/apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({

    endpoints: (build) => ({
        getAllOrders: build.query({
            query: () => ({
                url: `/api/order`
            }),
            providesTags: ["orders"]
        }),
        getOrdersById: build.query({
            query: (id) => ({
                url: `/api/order/${id}`
            }),
            providesTags: ["orders"]
        }),
        addOrder: build.mutation({
            query: (data) => ({
                url: '/api/order',
                method: "POST",
                body: data
            }),
        }),
        updateOrder: build.mutation({
            query: (data) => ({
                url: '/api/order',
                method: "PUT",
                body: data
            }),
        })
    })
})

export const {useUpdateOrderMutation, useAddOrderMutation ,useGetOrdersByIdQuery,useGetAllOrdersQuery} = orderApiSlice