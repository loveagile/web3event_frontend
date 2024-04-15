import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const result = await axios.get(`https://www.web3event.org/web3event/api/v1/popular/cities`)
        return NextResponse.json({ data: result.data.data }, { status: 200 })
    } catch (error: any) {
        console.error('Error popular cities data:', error);
        return NextResponse.json({ error: error.message }, { status: 500 })        
    }
}