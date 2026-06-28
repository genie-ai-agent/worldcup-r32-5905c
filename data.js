// 2026 FIFA World Cup Round of 32 — confirmed matchups
// Source: FIFA official + USA Today bracket, retrieved June 2026
window.MATCHES = [
  { num: 73, date: 'Sun, Jun 28', kickoff: '3:00 PM ET', venue: 'SoFi Stadium', city: 'Los Angeles', a: 'South Africa', b: 'Canada', flagA: '🇿🇦', flagB: '🇨🇦' },
  { num: 74, date: 'Mon, Jun 29', kickoff: '4:30 PM ET', venue: 'Gillette Stadium', city: 'Foxborough', a: 'Germany',      b: 'Paraguay', flagA: '🇩🇪', flagB: '🇵🇾' },
  { num: 75, date: 'Mon, Jun 29', kickoff: '7:00 PM CT', venue: 'Estadio BBVA',    city: 'Monterrey',  a: 'Netherlands',  b: 'Morocco',  flagA: '🇳🇱', flagB: '🇲🇦' },
  { num: 76, date: 'Mon, Jun 29', kickoff: '12:00 PM CT',venue: 'NRG Stadium',     city: 'Houston',    a: 'Brazil',       b: 'Japan',    flagA: '🇧🇷', flagB: '🇯🇵' },
  { num: 77, date: 'Tue, Jun 30', kickoff: '9:00 PM ET', venue: 'MetLife Stadium', city: 'East Rutherford', a: 'France',  b: 'Sweden',   flagA: '🇫🇷', flagB: '🇸🇪' },
  { num: 78, date: 'Tue, Jun 30', kickoff: '5:00 PM CT', venue: 'AT&T Stadium',    city: 'Arlington',  a: 'Côte d’Ivoire', b: 'Norway', flagA: '🇨🇮', flagB: '🇳🇴' },
  { num: 79, date: 'Tue, Jun 30', kickoff: '7:00 PM CT', venue: 'Estadio Azteca',  city: 'Mexico City',a: 'Mexico',       b: 'Ecuador',  flagA: '🇲🇽', flagB: '🇪🇨' },
  { num: 80, date: 'Wed, Jul 1',  kickoff: '4:00 PM ET', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', a: 'England',   b: 'Congo DR', flagA: '🏴‍☠️', flagB: '🇨🇩' },
  { num: 81, date: 'Wed, Jul 1',  kickoff: '8:00 PM PT', venue: 'Lumen Field',     city: 'Seattle',    a: 'Belgium',      b: 'Senegal',  flagA: '🇧🇪', flagB: '🇸🇳' },
  { num: 82, date: 'Wed, Jul 1',  kickoff: '9:00 PM PT', venue: 'Levi’s Stadium',  city: 'Santa Clara',a: 'United States',b: 'Bosnia & Herzegovina', flagA: '🇺🇸', flagB: '🇧🇦' },
  { num: 83, date: 'Thu, Jul 2',  kickoff: '4:00 PM PT', venue: 'SoFi Stadium',    city: 'Los Angeles',a: 'Spain',        b: 'Algeria',  flagA: '🇪🇸', flagB: '🇩🇿' },
  { num: 84, date: 'Thu, Jul 2',  kickoff: '8:00 PM ET', venue: 'BMO Field',       city: 'Toronto',    a: 'Portugal',     b: 'Croatia',  flagA: '🇵🇹', flagB: '🇭🇷' },
  { num: 85, date: 'Fri, Jul 3',  kickoff: '12:00 PM PT',venue: 'BC Place',        city: 'Vancouver',  a: 'Switzerland',  b: 'Iran',     flagA: '🇨🇭', flagB: '🇮🇷' },
  { num: 86, date: 'Fri, Jul 3',  kickoff: '2:00 PM CT', venue: 'AT&T Stadium',    city: 'Arlington',  a: 'Australia',    b: 'Egypt',    flagA: '🇦🇺', flagB: '🇪🇬' },
  { num: 87, date: 'Fri, Jul 3',  kickoff: '8:00 PM ET', venue: 'Hard Rock Stadium',city:'Miami Gardens',a:'Argentina',  b: 'Cabo Verde', flagA: '🇦🇷', flagB: '🇨🇻' },
  { num: 88, date: 'Sat, Jul 4',  kickoff: '12:00 PM CT',venue: 'Arrowhead Stadium',city: 'Kansas City',a: 'Colombia',    b: 'Ghana',    flagA: '🇨🇴', flagB: '🇬🇭' }
];

// England flag fallback — emoji England flag is composite; use generic
window.MATCHES[7].flagA = '🏴';

// Iqram's RSVP inbox
window.RSVP_EMAIL = 'iqram@jellyjelly.com';
