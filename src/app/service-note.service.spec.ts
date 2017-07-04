import { TestBed, inject } from '@angular/core/testing';

import { ServiceNoteService } from './service-note.service';

describe('ServiceNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceNoteService]
    });
  });

  it('should ...', inject([ServiceNoteService], (service: ServiceNoteService) => {
    expect(service).toBeTruthy();
  }));
});
