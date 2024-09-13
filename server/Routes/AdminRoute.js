import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
const router = express.Router();

router.get("/cars", (req, res) => {
    const sql = "SELECT * FROM  car";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/car/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const sql = `
    SELECT * FROM car c 
    JOIN seller s ON c.seller_id = s.s_id 
    JOIN model m ON m.m_id = c.model_id
    JOIN cylinder cy ON c.cylider = cy.cy_id 
    JOIN color col ON col.col_id = c.interColor
    JOIN fuel_type f ON f.f_id = c.fuel_id
    AND c.id = ? `;
    // const sql = "SELECT * FROM  car where id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/sller_cars/:id/:s_id", (req, res) => {
    const id = req.params.id;
    const s_id = req.params.s_id;
    console.log(id);
    const sql = "SELECT * FROM  car where seller_id = ? and id != ?";
    con.query(sql, [s_id,id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/trending_cars", (req, res) => {
    const sql = "SELECT * FROM  car where likes > 100";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/sellers", (req, res) => {
    const sql = "SELECT * FROM  seller";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/models", (req, res) => {
    const sql = "SELECT * FROM  model";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/fuel_types", (req, res) => {
    const sql = "SELECT * FROM  fuel_type";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/cylinders", (req, res) => {
    const sql = "SELECT * FROM  cylinder";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/colors", (req, res) => {
    const sql = "SELECT * FROM  color";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get("/trims", (req, res) => {
    const sql = "SELECT * FROM  trim";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Public/Images");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});
const upload = multer({
    storage: storage,
});

//Posts 
router.post("/add_car", upload.single("image"), (req, res) => {
    const sql = `INSERT INTO car (title,price,year,speed,image,seller_id,model_id,trim_id,cylider,fuel_id,interColor) VALUES (?) `;
    const values = [
        req.body.title,
        req.body.price,
        req.body.year,
        req.body.speed,
        req.file.filename,
        req.body.seller_id,
        req.body.model_id,
        req.body.trim_id,
        req.body.cylinder_id,
        req.body.fuel_id,
        // req.body.excolor,
        req.body.intercolor,
    ];
    console.log("body:", req.body);
    console.log("values:", values);

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_carImage", upload.single("car_image"), (req, res) => {
    const sql = `INSERT INTO carimage (car_id,car_image) VALUES (?) `;
    const values = [req.body.car_id, req.file.filename];
    console.log("body:", req.body);
    console.log("body:", req.file.filename);
    console.log("values:", values);

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_seller", upload.single("s_image"), (req, res) => {
    const sql = `INSERT INTO seller (s_name,s_image,max_prix) VALUES (?) `;
    const values = [req.body.s_name, req.file.filename, req.body.max_price];
    console.log("body:", req.body);
    console.log("values:", values);

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_model", upload.single("image"), (req, res) => {
    const sql = `INSERT INTO model (m_name,seller_id) VALUES (?) `;
    const values = [req.body.m_name, req.body.seller_id];
    console.log("body:", req.body);
    console.log("values:", values);

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_trim", upload.single("image"), (req, res) => {
    const sql = `INSERT INTO trim (t_name,model_id) VALUES (?) `;
    const values = [req.body.t_name, req.body.model_id];
    console.log("body:", req.body);
    console.log("values:", values);

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_cylinder", upload.single("image"), (req, res) => {
    const sql = `INSERT INTO cylinder (cy_name) VALUES (?) `;

    console.log("body:", req.body.cy_name);
    con.query(sql, [req.body.cy_name], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_color", upload.single("image"), (req, res) => {
    const sql = `INSERT INTO color (name) VALUES (?) `;

    console.log("body:", req.body.name);
    con.query(sql, [req.body.name], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/add_fuel_type", upload.single("image"), (req, res) => {
    const sql = `INSERT INTO fuel_type (f_name) VALUES (?) `;

    console.log("body:", req.body.f_name);
    con.query(sql, [req.body.f_name], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.post("/signup", upload.single("profile"), (req, res) => {
    const sql = `INSERT INTO users (username,password,email, nameComplet, job, profile, gender, mobile) VALUES (?) `;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        const values = [
            req.body.username, 
            hash,
            req.body.email,
            req.body.nameComp, 
            req.body.job,
            req.file.filename,
            req.body.gender, 
            req.body.mobile
        ];
        console.log("body:", req.body);
        console.log("values:", values);

        con.query(sql, [values], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query error" });
            return res.json({ Status: true, Result: result });
        });
    });

});

router.post("/login", (req, res) => {
    const sql = "Select * From users Where username = ? and password = ?";
    console.log("body:", req.body);

    con.query(sql, [req.body.username, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
            const username = result[0].username;
            console.log("user:", username);
            const token = jwt.sign(
                {  username: username },
                "jwt_secret_key",
                { expiresIn: "1d" }
            );
            res.cookie("token", token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "Wrong username or password" });
        }
    });
});

router.get("/seller/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const sql = "SELECT * FROM  seller WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});
export { router as adminRouter };
