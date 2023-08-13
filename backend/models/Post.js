const moongose = require('mongoose');

const postSchema = new moongose.Schema({
    title: String,
    description: String,
    slug: String,
    quantity: Number,
    unit: {
        type: String,
        enum: ['kg', 'g', 'l', 'ml', 'unit'],
    },
    images: [
        {
            url: String,
            public_id: String,
        },
    ],

    type: {
        type: String,
        enum: ['offer', 'request'],
    },
    owner: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    recipients: [
        {
            user: {
                type: moongose.Schema.Types.ObjectId,
                ref: 'User',
            },
            reciptedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],

    longitude: {
        type: Number,
        required: [true, 'Please enter longitude'],
        validate: {
            validator: function (v) {
                return v >= -180 && v <= 180;
            },
            message: props => `${props.value} is not a valid longitude!`
        }
    },

    latitude: {
        type: Number,
        required: [true, 'Please enter latitude'],
        validate: {
            validator: function (v) {
                return v >= -90 && v <= 90;
            },
            message: props => `${props.value} is not a valid latitude!`
        }
    },
    // mongodb location hanlding using long and lat
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
        }
    },
    tags: [
        {
            type: String,
        },
    ],
    comments: [
        {
            user: {
                type: moongose.Schema.Types.ObjectId,
                ref: 'User',
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ]
});

postSchema.index({ location: '2dsphere' });

postSchema.pre('save', async function (next) {
    if (!this.isModified('title')) {
        next();
    }
    this.location = {
        type: 'Point',
        coordinates: [this.longitude, this.latitude]
    }
   let slug = this.title.split(' ').join('-');
    const slugRegEx = new RegExp(`^(${slug})((-[0-9]*$)?)$`, 'i');

    const postsWithSlug = await this.constructor.find({ slug: slugRegEx });

    if (postsWithSlug.length) {
        slug = `${slug}-${postsWithSlug.length + 1}`;
    }

    this.slug = slug;

});

module.exports = moongose.model('Post', postSchema);