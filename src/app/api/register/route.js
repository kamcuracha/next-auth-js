import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createUser } from "@/queries/users";
import { dbConnect } from "@/utils/mongo";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  // create db connn
  await dbConnect();

  // encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);

  // form a db payload
  const newUser = {
    name,
    password: hashedPassword,
    email
  }
  
  // update db
  try {
    await createUser(newUser)
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    })
  }

  return new NextResponse("User has been created.", {
    status: 201,
  })
}