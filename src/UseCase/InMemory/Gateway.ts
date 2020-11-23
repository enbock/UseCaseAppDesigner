import GatewayInterface from '../Gateway';
import Entity from '../Entity';
import InMemoryEntity from './Entity';
import * as uuid from 'uuid';

export default class Gateway implements GatewayInterface {
    create(): Entity {
        const entity: Entity = new InMemoryEntity();
        entity.id = uuid.v4();
        return entity;
    }
}
