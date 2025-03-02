import { json } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const input = url.searchParams.get("input");

    if (!input) {
      return json({ success: false, error: "Input is required." }, { status: 400 });
    }

    const response = await fetch(`https://leakcheck.io/api/v2/query/${encodeURIComponent(input)}`, {
      headers: {
        "Accept": "application/json",
        "X-API-Key": process.env.LEAKCHECK_API_KEY || "",
      },
    });

    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error(" LeakCheck API error:", error);

    // **Ensure error is properly typed**
    let errorMessage = "Unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }

    return json(
      { success: false, error: "LeakCheck API error", details: errorMessage },
      { status: 500 }
    );
  }
};
