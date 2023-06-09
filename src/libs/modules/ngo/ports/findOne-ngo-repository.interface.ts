import { Ngo } from '../domain';

export interface FindOneNgoRepositoryInterface {
  execute(id: string): Promise<Ngo>;
}
