import React from "react";

export function Order() {
    const Data = {
        order_id: "100102",
        order_date: "04 Sep, 2024",
        status: "Pending",

        orders: [
            {
                name: "Avocado",
                img: "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239d57323703.png",
                quantity: 1,
                unit_price: 300.00,
            },
            // {
            //     name: "Avocado",
            //     img: "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239d57323703.png",
            //     quantity: 1,
            //     unit_price: 300.00,
            // },
        ],
        address: "Gadge Nagar Ramna Maruti Road, 44FM+7CV , near jain Mandir ,New Diamond Nagar, New Sahakar Nagar, Kharbi, Nagpur , Maharashtra 440024, India",
        Payment_mode: "Cash On Delivery"
    }
    return (
        <div className="mt-12">
            <div className="m-auto w-[90%] sm:w-[75%]">
                <div className="m-auto gap-2">
                    <div className="flex flex-col sm:flex-wrap md:flex-row gap-x-2 sm:gap-y- justify-between">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-6">
                                <div className="flex flex-wrap gap-x-6">
                                    <span className="font-semibold text-lg sm:text-xl text-slate-600 ">Order ID : {Data.order_id}</span>
                                    <div className="flex gap-x-6">
                                        <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md font-semibold h-[28px] w-[75px]">Pending</span>
                                        <span className="bg-slate-400 text-white px-2 py-1 text-sm rounded-md font-medium h-[28px] w-[75px]" >Delivery</span>
                                    </div>
                                </div>
                            </div>
                            <div className="font-semibold text-slate-500 text-[14px]">
                                Order date : <span className="text-slate-600 font-semibold">{Data.order_date}</span>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-0">
                            <button className="bg-[#8E0F5D] md:text-lg h-[35px] text-sm px-3 text-center text-white rounded-md md:h-[45px]">Cancel Order</button>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-row flex-nowrap text-nowrap gap-x-8 text-gray-600 overflow-y-auto scrollbar-none no-scrollbar">
                        <div className="text-sm lg:text-[18px] bg-[#FFDEEF] py-2 px-4 rounded-md text-[#8E0F5D] font-bold">Order Summary</div>
                        <div className="text-sm lg:text-[18px] content-center">Seller Info</div>
                        <div className="text-sm lg:text-[18px] content-center">Delivery Man Info</div>
                        <div className="text-sm lg:text-[18px] content-center">Track Order</div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 mt-2 md:mt-8">
                        <div className="w-full lg:w-[65%]">
                            <span>
                                {
                                    Data.orders.map(() => {
                                        return (
                                            <div className="flex flex-row justify-between w-full mt-8">
                                                <div className="flex gap-2 text-sm md:text-base">
                                                    <img className="w-[50px] h[50px] md:h-[70px] md:w-[70px]" src={Data.orders[0].img} alt="" />
                                                    <div className="flex flex-col">
                                                        <span className="font-bold ">{Data.orders[0].name}</span>
                                                        <span className="">Kg</span>
                                                        <span>Unit Price : $ {Data.orders[0].unit_price}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:gap-3 mt-4 sm:mt-0 text-sm md:text-base">
                                                    <div className="font-bold">$300.00</div>
                                                    <div>QTY: 1</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </span>

                            <hr className="w-full mt-4"></hr>

                            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                                <div className="w-full sm:w-[45%] flex flex-col gap-4 sm:border-r-2">
                                    <div className="font-bold text-xl">Address</div>
                                    <div className="w-full leading-7 text-gray-600">{Data.address}</div>
                                </div>

                                <div className="w-full sm:w-[45%] flex flex-col gap-6 mx-auto md:items-center mt-6 sm:mt-0">
                                    <div className="font-bold text-xl">Payment</div>
                                    <div className="flex gap-2">
                                        <img className="w-[20px]" src="https://clipart-library.com/img1/1249836.gif" alt="" />
                                        <span>{Data.Payment_mode}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full lg:w-[30%] gap-4 p-6 bg-gray-50 rounded-md text-gray-600">
                            <div className="font-semibold">Summary</div>
                            <div className="flex justify-between">
                                <div>Item Price</div>
                                <div>$300</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Subtotal</div>
                                <div>$300</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Discount</div>
                                <div>-$60</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Delivery Man Tips</div>
                                <div>$20</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Additional Charges</div>
                                <div>$10</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Delivery Fee</div>
                                <div>$600</div>
                            </div>
                            <hr className="border-dotted bg-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
