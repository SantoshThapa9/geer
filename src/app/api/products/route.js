import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const productsFilePath = path.join(process.cwd(), "data", "products.json");

const ensureDataDirectory = () => {
  const dataDir = path.dirname(productsFilePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

const readProducts = () => {
  try {
    ensureDataDirectory();
    if (fs.existsSync(productsFilePath)) {
      const data = fs.readFileSync(productsFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading products:", error);
  }
  return [];
};

const writeProducts = (products) => {
  try {
    ensureDataDirectory();
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error writing products:", error);
  }
};

export async function GET() {
  try {
    const products = readProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, price, imageUrl, description, category } = body;

    if (!name || !price || !imageUrl) {
      return NextResponse.json(
        { error: "Name, price, and imageUrl are required" },
        { status: 400 }
      );
    }

    const products = readProducts();

    const newProduct = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      imageUrl,
      description: description || "",
      category: category || "General",
      createdAt: new Date().toISOString(),
    };

    products.push(newProduct);
    writeProducts(products);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
