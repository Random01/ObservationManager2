import { firstValueFrom } from 'rxjs';

import { TargetType } from '../../../shared/models/target-type.model';
import { TargetTypeService } from '../target-type.service';
import { TargetTypeFormatterPipe } from './target-type-formatter.pipe';

describe('TargetTypeFormatterPipe', () => {
  it('uses the same label as the target selector and leaves missing types blank', async () => {
    const service = new TargetTypeService();
    const pipe = new TargetTypeFormatterPipe(service);
    const options = await firstValueFrom(service.getAllTargetTypes());
    expect(options).toContain({ type: TargetType.Galaxy, name: 'Galaxy' });
    expect(pipe.transform(TargetType.Galaxy)).toBe('Galaxy');
    expect(pipe.transform()).toBe('');
  });
});
