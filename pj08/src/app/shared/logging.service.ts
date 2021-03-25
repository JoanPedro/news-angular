export class LogginService {
  public logStatusChange: (status: String) => void = (status) => {
    console.log('A server status changed, new status: ' + status);
  }
}
