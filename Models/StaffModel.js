import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const staffSchema = new mongoose.Schema({
    hospital_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalAdminAccount',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    relationshipStatus: {
        type: String,
        enum: ['Married', 'Single', 'Widow', 'Widower'],
        required: true
    },
    role: {
        type: String,
        enum: ['Receptionist', 'Doctor'],
        required: true
    },
    licenseNumber: {
        type: String,
        required: function() {
            return this.role === 'Doctor';
        }
    },
    avatar: {
        type: String,
    },
    nextOfKin: {
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        relationshipStatus: {
            type: String,
            enum: ['Father', 'Mother', 'Sibling', 'Friend', 'Other Relatives'],
            required: true
        }
    },
    availability_Status: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        enum: ['Online', 'Offline'],
        default: 'Offline'
    },
    lastSeen: {
        type: Date,
        default: null
    },
}, {
    timestamps: true
});

staffSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

const StaffData = mongoose.model('StaffData', staffSchema);

export default StaffData;
