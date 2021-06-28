export class User{
    constructor(
                    public userId: string,
                    public name: string,
                    public emailId: string
               ){
                    this.userId=userId;
                    this.name=name;
                    this.emailId=emailId;
               }
}