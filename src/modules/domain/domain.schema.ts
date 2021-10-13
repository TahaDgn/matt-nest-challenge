import {
    Prop,
    Schema,
    SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as fuzzySearching from 'mongoose-fuzzy-searching';


@Schema({
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
})
export class Domain extends Document {
    @Prop({ type: 'string', required: true, unique: true })
    domainName: string;

    @Prop({ type: 'string', required: true, index: true })
    ownerId: number;

    @Prop({ type: 'string', required: true })
    ownerName: string;
}

export type DomainDocument = Domain & Document;

const DomainSchema = SchemaFactory.createForClass(Domain);

// Schema ops.
DomainSchema.index({ domainName: 'text' });

DomainSchema.plugin(fuzzySearching, { fields: 'domainName' });

export { DomainSchema };
