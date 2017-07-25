using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class ResistanceBonus : BaseBonus
    {
        public DaocEnums.Resistances Res { get; set; }
        public ResistanceBonus(DaocEnums.bonustype type, int? max, string text, bool isPvE, DaocEnums.Resistances res) : base(type,max,text, isPvE,2,2)
        {
            Res = res;
        }
    }
}
