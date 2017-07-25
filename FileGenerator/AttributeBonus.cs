using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class AttributeBonus : BaseBonus
    {
        public DaocEnums.Attributes Attr { get; set; }



        public AttributeBonus(DaocEnums.bonustype type, int? max, string text, bool isPvE, DaocEnums.Attributes attr) : base(type,max,text, isPvE,(double)2/3,2)
        {
            Attr = attr;
        }

    }
}
