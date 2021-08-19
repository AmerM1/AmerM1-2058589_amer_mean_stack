import { TestBed } from '@angular/core/testing';

import { ExamQService } from './exam-q.service';

describe('ExamQService', () => {
  let service: ExamQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
