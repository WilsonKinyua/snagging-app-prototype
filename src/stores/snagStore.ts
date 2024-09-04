import { defineStore } from "pinia";

export interface Snag {
  id: number;
  title: string;
  description: string;
  type: string;
  priority: string;
  location?: string;
  image: string;
  assignedTo?: string;
  status?: string;
  completionComment?: string;
  completionImage?: string;
  estimatedCost?: number;
  createdAt: Date;
}

export const useSnagStore = defineStore("snag", {
  state: () => ({
    snags: JSON.parse(localStorage.getItem("snags") || "[]") as Snag[],
  }),
  actions: {
    addSnag(snag: Snag) {
      this.snags.push(snag);
      this.syncLocalStorage();
    },
    updateSnag(updatedSnag: Snag) {
      const index = this.snags.findIndex((s: Snag) => s.id === updatedSnag.id);
      if (index !== -1) {
        this.snags[index] = updatedSnag;
        this.syncLocalStorage();
      }
    },
    completeSnag(completion: { id: number; details: string; image: string }) {
      const snag = this.snags.find((s: Snag) => s.id === completion.id);
      if (snag) {
        snag.status = "completed";
        snag.completionComment = completion.details;
        snag.completionImage = completion.image;
        this.syncLocalStorage();
      }
    },
    syncLocalStorage() {
      localStorage.setItem("snags", JSON.stringify(this.snags));
    },
    generateDummyData() {
      const dummyData: Snag[] = [
        {
          id: 1,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "in-progress",
          createdAt: new Date("2024-01-21"),
        },
        {
          id: 3,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-02-21"),
        },
        {
          id: 4,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-03-21"),
        },
        {
          id: 5,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "",
          status: "in-progress",
          createdAt: new Date("2024-04-21"),
        },
        {
          id: 6,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "",
          status: "in-progress",
          createdAt: new Date("2024-05-21"),
        },
        {
          id: 7,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-06-21"),
        },
        {
          id: 8,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "in-progress",
          createdAt: new Date("2024-07-21"),
        },
        {
          id: 9,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-08-21"),
        },
        {
          id: 10,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-09-21"),
        },
        {
          id: 11,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "completed",
          createdAt: new Date("2024-09-21"),
        },
        {
          id: 12,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-09-21"),
        },
        {
          id: 13,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-09-21"),
        },
        {
          id: 14,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "in-progress",
          createdAt: new Date("2024-01-13"),
        },
        {
          id: 15,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "completed",
          createdAt: new Date("2024-02-13"),
        },
        {
          id: 16,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "",
          status: "in-progress",
          createdAt: new Date("2024-03-13"),
        },
        {
          id: 17,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "in-progress",
          createdAt: new Date("2024-04-13"),
        },
        {
          id: 18,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "pending",
          createdAt: new Date("2024-05-13"),
        },
        {
          id: 19,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "",
          status: "completed",
          createdAt: new Date("2024-06-13"),
        },
        {
          id: 20,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "in-progress",
          createdAt: new Date("2024-07-13"),
        },
        {
          id: 21,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-08-13"),
        },
        {
          id: 22,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "pending",
          createdAt: new Date("2024-09-13"),
        },
        {
          id: 23,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "completed",
          createdAt: new Date("2024-09-13"),
        },
        {
          id: 24,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "completed",
          createdAt: new Date("2024-09-13"),
        },
        {
          id: 25,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-09-13"),
        },
        {
          id: 26,
          title: "Broken window in the lobby",
          description: "Window in the lobby is broken",
          type: "glass",
          priority: "medium",
          location: "Lobby",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "Jane Doe",
          status: "pending",
          createdAt: new Date("2024-01-21"),
        },
        {
          id: 27,
          title: "Broken light in the hallway",
          description: "Light in the hallway is broken",
          type: "electrical",
          priority: "low",
          location: "Hallway",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-02-21"),
        },
        {
          id: 28,
          title: "Leaking pipe in basement",
          description: "Pipe in basement wing 2 is leaking",
          type: "plumbing",
          priority: "high",
          location: "Basement wing 2",
          image:
            "https://www.thespruce.com/thmb/oFN0OfyQoIj4stmT652pnKkVBfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-957479686-f3d2e677f2e749fc98aa207b474c5c1f.jpg",
          assignedTo: "John Doe",
          status: "in-progress",
          createdAt: new Date("2024-03-21"),
        },
      ];
      this.snags = dummyData;
      this.syncLocalStorage();
    },
  },
});
