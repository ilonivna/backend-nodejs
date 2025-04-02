import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    id: {
type: Number,
required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,

    },
    email: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,

      },
      suite: {
        type: String,

      },
      city: {
        type: String,

      },
      zipcode: {
        type: String,

      },
      geo: {
        lat: {
          type: String,

        },
        lng: {
          type: String,

        },
      },
    },
    phone: {
      type: String,

    },
    website: {
      type: String,

    },
    company: {
        name: {
            type: String,

        },
        catchPrase: {
            type: String,

        },
        bs: {
            type: String,

        },
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


export const UsersCollection = model("users", usersSchema);
