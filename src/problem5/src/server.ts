import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create a resource
app.post("/resources", async (req, res) => {
    try {
        const resource = await prisma.resource.create({
            data: req.body,
        });
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ error: "Error creating resource" });
    }
});

// List resources with basic filters
app.get("/resources", async (req, res) => {
    try {
        const resources = await prisma.resource.findMany({
            where: req.query,
        });
        res.json(resources);
    } catch (error) {
        res.status(400).json({ error: "Error fetching resources" });
    }
});

// Get details of a resource
app.get("/resources/:id", async (req, res) => {
    try {
        const resource = await prisma.resource.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!resource) res.status(404).json({ error: "Resource not found" });
        res.json(resource);
    } catch (error) {
        res.status(400).json({ error: "Error fetching resource" });
    }
});

// Update resource details
app.put("/resources/:id", async (req, res) => {
    try {
        const updatedResource = await prisma.resource.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        res.json(updatedResource);
    } catch (error) {
        res.status(400).json({ error: "Error updating resource" });
    }
});

// Delete a resource
app.delete("/resources/:id", async (req, res) => {
    try {
        await prisma.resource.delete({
            where: { id: Number(req.params.id) },
        });
        res.json({ message: "Resource deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error deleting resource" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
