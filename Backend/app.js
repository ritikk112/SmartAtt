const express = require("express");
const { query } = require("./services/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (_req, res) => {
  res.json({ message: "ok" });
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, rollnumber, course } =
      req.body;
    if (
      !(email && password && name && rollnumber && course)
    ) {
      res.status(400).send("All input is required");
    }

    const oldUser = await query("SELECT * FROM studentmaster WHERE email = ?", [
      email.toLowerCase(),
    ]);

    if (oldUser.length) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const result = await query(
      "INSERT INTO studentmaster (name, email, password, rollnumber, course) VALUES (?, ?, ?, ?, ?)",
      [
        name,
        email.toLowerCase(),
        encryptedPassword,
        rollnumber,
        course,
      ]
    );

    const token = jwt.sign({ id: result.insertId, email }, "random_token_key", {
      expiresIn: "24h",
    });
    const user = {
      email,
      name,
      rollnumber,
      course,
      id: result.insertId,
      token,
    };

    res.status(201).json('noerrorinbackend'+user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await query("SELECT * FROM users WHERE email = ?", [
      email.toLowerCase(),
    ]);

    if (user && (await bcrypt.compare(password, user[0].password))) {
      const token = jwt.sign({ id: user[0].id, email }, "random_token_key", {
        expiresIn: "24h",
      });
      const userWithoutPassword = {
        email: user[0].email,
        name: user[0].name,
        rollnumber: user[0].rollnumber,
        course: user[0].course,
        id: user[0].id,
        token,
      };
      return res.status(200).json(userWithoutPassword);
    }
    res.status(400).send("Invalid Credentials");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/validate", auth, async (req, res) => {
  res.status(200).json(req.user);
});

app.post("/register-teacher", auth, async (req, res) => {
  try {
    const { email, password, first_name, last_name } = req.body;
    if (
      !(email && password && first_name && last_name && rollnumber && course)
    ) {
      res.status(400).send("All input is required");
    }
    const oldUser = await query("SELECT * FROM teachers WHERE email = ?", [
      email.toLowerCase(),
    ]);
    if (oldUser.length) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const result = await query(
      "INSERT INTO teachers (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [first_name, last_name, email.toLowerCase(), encryptedPassword]
    );
    const token = jwt.sign({ id: result.insertId, email }, "random_token_key", {
      expiresIn: "24h",
    });
    const user = {
      email,
      first_name,
      last_name,
      id: result.insertId,
      token,
    };
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/login-teacher", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await query("SELECT * FROM teachers WHERE email = ?", [
      email.toLowerCase(),
    ]);

    if (user && (await bcrypt.compare(password, user[0].password))) {
      const token = jwt.sign({ id: user[0].id, email }, "random_token_key", {
        expiresIn: "24h",
      });
      const userWithoutPassword = {
        email: user[0].email,
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        id: user[0].id,
        token,
      };
      return res.status(200).json(userWithoutPassword);
    }
    res.status(400).send("Invalid Credentials");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
