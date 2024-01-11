import JWT from "jsonwebtoken";
import express from "express";
import colors from "colors";
import connectDB from "./configdb.js";
///import authRoutes from "./authroute.js";
import cors from 'cors';
//import { registerController } from "./authcontrollers.js";
import userModel from "./model/user.js";
import dotenv from "dotenv";

//configure env
dotenv.config();

//object
const app=express();
//databse config
connectDB();

//middelwaress
app.use(cors());
app.use(express.json());

//routes
//app.use("/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to CatBlogger");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password} = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    //save
    const user = await new userModel({
      name,
      email,
      password
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    console.log("eroorr r 999999 ")
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
}
);

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    if (!(password==user.password)) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
});


app.get("/dashboard/user", (req, res) => {
  res.status(200).send({ ok: true });
});



import Blog from "./model/blog.js";


// Route to get blogs for a specific user based on their email
app.get('/blog/', async (req, res) => {
  try {
    const userId = req.query.userId;

    // If userId is not provided in the query, return an error
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required in the query parameters' });
    }
    const blogs = await Blog.find({ userId: userId });
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting User Blogs",
      error,
    });
  }
});


// Route to create a new blog for a user
app.post('/blog', async (req, res) => {
  const {  title, content, userId } = req.body;

  try {
    const newBlog = new Blog({ // Assuming the user ID or email is used to associate the blog with the user
      title,
      content,
      userId,
    });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Route to get all blogs
app.get('/blog/all', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting All Blogs",
      error,
    });
  }
});

// Route to get blogs for a specific user based on their email
app.get('/bloger/', async (req, res) => {
  try {
    const blogId = req.query.blogId;

    // If userId is not provided in the query, return an error
    if (!blogId) {
      return res.status(400).json({ error: 'Blog ID is required in the query parameters' });
    }
    const blogs = await Blog.find({ _id: blogId });
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting User Blogs",
      error,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running on mode ${process.env.DEV_MODE} and its port is  ${PORT}`
      .bgCyan.white
  );
});
