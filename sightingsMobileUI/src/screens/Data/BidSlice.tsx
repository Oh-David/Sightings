import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Bid
{
    product1Id: string
    product2Id: string
}

interface BidState
{
    bids: Bid[]
}

const initialBidState: BidState = {
    bids: [],
}

const BidSlice = createSlice({
    name: "Bids",
    initialState: initialBidState,
    reducers: {
        addBid: (state, action: PayloadAction<Bid>) =>
        {
            state.bids.push(action.payload)
        },
        removeBid: (state, action: PayloadAction<{product1Id: string, product2Id: string}>) =>
        {
            state.bids = state.bids.filter(
                (bid) =>
                    !(bid.product1Id === action.payload.product1Id && bid.product2Id === action.payload.product2Id)
            )
        },
    },
})

export const {addBid, removeBid} = BidSlice.actions
export default BidSlice.reducer