import { http, HttpResponse } from 'msw';

export const mswHandlers = {
  contact: [
    http.post('/contact', () =>
      HttpResponse.json({ success: true })
    ),
  ],
};
