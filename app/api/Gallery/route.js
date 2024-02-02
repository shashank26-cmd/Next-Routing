const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const data = await fetch("https://api.slingacademy.com/v1/sample-data/photos");
    const res = await data.json();
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (e) {
    console.log(e);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
  }
};
