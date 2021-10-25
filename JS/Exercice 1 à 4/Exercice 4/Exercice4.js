PU=0
QTECOM=0
PAP=0
REM =0
PORT=0

PU=prompt("Saisir le prix unitaire s.v.p.")
QTECOM= prompt("Saisir  la quantité commandée s.v.p.")
TOT=parseInt (PU) * parseInt (QTECOM)

if (TOT>=100 && TOT<=200) 
{
    REM=(5*TOT)/100
}
else if (TOT>201) 
{
    REM=(10*TOT)/100
};

TOTREMISE=TOT-REM;

if (TOTREMISE<=500)
{
    PORT=(2*TOTREMISE)/100
}
if (PORT<6)
{
    PORT=6
}


if (TOTREMISE>500) 
{
    PORT=0
};

PAP=TOTREMISE + PORT

alert("\nLe prixa paye est :  " +PAP+ "\n La remise est : " +REM+ "\n Les frais de port sont : " +PORT)
