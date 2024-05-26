import React, { useState, ChangeEvent, FormEvent } from "react";

type ServiceFormProps = {
  onSubmit: (service: {
    name: string;
    description: string;
    location: string;
    rating: string;
  }) => Promise<void>;
};

const ServiceForm: React.FC<ServiceFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input before sending POST request
    if (!name || !description || !location || !rating) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await onSubmit({ name, description, location, rating });

      setName("");
      setDescription("");
      setLocation("");
      setRating("");
      setError("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
          className="block w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          required
          className="block w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
          required
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRating(e.target.value)
          }
          required
          className="block w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
