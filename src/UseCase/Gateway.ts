import Entity from './Entity';

export default interface Gateway {
    create(): Entity
}
