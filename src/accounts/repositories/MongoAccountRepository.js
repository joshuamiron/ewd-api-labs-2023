import Account from '../entities/Account';
import mongoose from 'mongoose';
import AccountRepository from './Repository';

export default class extends AccountRepository {

    constructor() {
        super();
        const accountsSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
            email: { type: String, unique: true, index: true },
            password: String,
            favourites: [Number],
            playlist: [Number],
        });
        this.model = mongoose.model('Account', accountsSchema);
    }

    async persist(accountEntity) {
        const { firstName, lastName, email, password } = accountEntity;
        const result = new this.model({ firstName, lastName, email, password });
        await result.save();
        accountEntity.id = result.id;
        return accountEntity;
    }

    async merge(accountEntity) {
        const { id, firstName, lastName, email, password, favourites, playlist } = accountEntity;
        await this.model.findByIdAndUpdate(id, { firstName, lastName, email, password, favourites, playlist });
        console.log({ id, firstName, lastName, email, password, favourites, playlist });
        return accountEntity;
    }

    async removeById(userId) {
        return this.model.findOneAndDelete(userId);
    }

    async getById(userId) {
        const result = await this.model.findById(userId);
        const { id, firstName, lastName, email, password, favourites, playlist } = result;
        return new Account(id, firstName, lastName, email, password, favourites, playlist);
    }

    async getByEmail(userEmail) {
        console.log("getByEmail in MongoAccountRepo: " + userEmail.toLowerCase());
        const result = await this.model.findOne({ email: userEmail.toLowerCase() });
        return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites, result.playlist);
    }

    async find() {
        const accounts = await this.model.find();
        return accounts.map((result) => {
            return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites, result.playlist);
        });
    }
}
