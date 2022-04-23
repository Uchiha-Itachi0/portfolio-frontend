import styled from "styled-components";

const LoginFormContainer = styled.div`
padding: var(--section-heading-padding);
text-align: center;
    .login_container{
        
        .login_form{
            display: flex;
            flex-direction: column;
            gap: 3em;

            .login_button{
                margin-top: 3em;
                cursor: pointer;
            }
        }
    }


    /* a{
      font-size: max(2vw, 15px);
    }
    .circle_button{
        width: 20vw;
        height: 10vw;
    } */

@media only screen and (max-width: 600px){

    .login_container{
        .login_form{
            .login_button{
                a{
                    font-size: 5vw;
                }
                .circle_button{
                    width: 40vw;
                    height: 25vw;
                }
            }
        }
        .logout_button{
                a{
                    font-size: 5vw;
                }
                .circle_button{
                    width: 40vw;
                    height: 25vw;
                }
            }
    }

}

`;

export default LoginFormContainer;