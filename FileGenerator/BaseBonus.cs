using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class BaseBonus
    {
        public DaocEnums.bonustype Type { get; set; }
        public int? Max { get; set; }
        public string Text { get; set; }
        public bool IsPvE { get; set; }
        public int? Value { get; set; }
        public double Utility { get; set; }
        public double ToAUtility { get; set; }

        public BaseBonus(DaocEnums.bonustype type, int? max, string text, bool isPvE) {
            Type = type;
            Max = max;
            Text = text;
            IsPvE = isPvE;
            Utility = 0;
            ToAUtility = 0;

        }
        public BaseBonus(DaocEnums.bonustype type, int? max, string text, bool isPvE,double utility,double toaUtility):this(type,max,text,isPvE)
        {
            Utility = utility;
            ToAUtility = toaUtility;
        }


    }
}
